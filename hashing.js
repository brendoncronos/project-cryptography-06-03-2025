const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const senha = "minha_senha_super_secreta";

// Hash usando SHA-256 (fixo)
const sha256Hash = crypto
    .createHash('sha256')
    .update(senha)
    .digest('hex'); // ou 'hex', 'base64', 'ascii', 'binary'

console.log(`SHA-256 Hash com ${sha256Hash.length} caracteres: ${sha256Hash}`);

// Hash usando bcrypt (com salt)
