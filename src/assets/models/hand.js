// Helper function to create binary buffer for hand model
function generateHandBuf() {
    // Define a simple hand-like geometry (simplified for example)
    const vertices = new Float32Array([
        // front face
        -1.0, -1.0,  1.0,  // vertex 0
         1.0, -1.0,  1.0,  // vertex 1
         1.0,  1.0,  1.0,  // vertex 2
        -1.0,  1.0,  1.0,  // vertex 3
        // back face
        -1.0, -1.0, -1.0,  // vertex 4
         1.0, -1.0, -1.0,  // vertex 5
         1.0,  1.0, -1.0,  // vertex 6
        -1.0,  1.0, -1.0   // vertex 7
    ]);

    const indices = new Uint16Array([
        0, 1, 2,    0, 2, 3,    // front
        1, 5, 6,    1, 6, 2,    // right
        5, 4, 7,    5, 7, 6,    // back
        4, 0, 3,    4, 3, 7,    // left
        3, 2, 6,    3, 6, 7,    // top
        4, 5, 1,    4, 1, 0     // bottom
    ]);

    // Create metadata object
    const metadata = {
        vertexCount: vertices.length / 3,
        indexCount: indices.length,
        attributes: [
            {
                id: "position",
                componentSize: 3,
                storageType: "Float32Array",
                needsPack: false
            },
            {
                id: "indices",
                componentSize: 1,
                storageType: "Uint16Array",
                needsPack: false
            }
        ]
    };

    // Convert metadata to UTF-8 bytes
    const metadataString = JSON.stringify(metadata);
    const encoder = new TextEncoder();
    const metadataBytes = encoder.encode(metadataString);

    // Calculate total buffer size
    const headerSize = 4; // size for metadata length (uint32)
    const totalSize = headerSize + metadataBytes.length + 
                     vertices.byteLength + indices.byteLength;

    // Create final buffer
    const buffer = new ArrayBuffer(totalSize);
    const dataView = new DataView(buffer);

    // Write metadata length
    dataView.setUint32(0, metadataBytes.length, true);

    // Write metadata bytes
    const metadataView = new Uint8Array(buffer, headerSize, metadataBytes.length);
    metadataView.set(metadataBytes);

    // Write vertex data
    const vertexView = new Float32Array(buffer, headerSize + metadataBytes.length);
    vertexView.set(vertices);

    // Write index data
    const indexView = new Uint16Array(
        buffer, 
        headerSize + metadataBytes.length + vertices.byteLength
    );
    indexView.set(indices);

    return buffer;
}

// Function to save buffer to file
function saveHandBuf() {
    const buffer = generateHandBuf();
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    
    // In browser environment:
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'hand.buf';
    link.click();
    URL.revokeObjectURL(link.href);
}

// In Node.js environment:
// const fs = require('fs');
// fs.writeFileSync('hand.buf', Buffer.from(generateHandBuf()));