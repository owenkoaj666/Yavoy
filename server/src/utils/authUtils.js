const crypto = require('crypto');

/**
 * Generate a unique user code
 * Format: YAV-XXXXX-XXXXX (YAV prefix + random alphanumeric)
 */
function generateUserCode() {
  const prefix = 'YAV';
  const part1 = crypto.randomBytes(3).toString('hex').toUpperCase().slice(0, 5);
  const part2 = crypto.randomBytes(3).toString('hex').toUpperCase().slice(0, 5);
  return `${prefix}-${part1}-${part2}`;
}

/**
 * Generate a unique API key/authentication token
 * Format: Base64 encoded timestamp + random bytes
 */
function generateAuthKey() {
  const timestamp = Date.now().toString();
  const randomBytes = crypto.randomBytes(32).toString('hex');
  const combined = `${timestamp}:${randomBytes}`;
  return Buffer.from(combined).toString('base64');
}

/**
 * Generate a session token for user login
 */
function generateSessionToken() {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Hash a password using SHA-256
 */
function hashPassword(password) {
  return crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');
}

/**
 * Verify a password against its hash
 */
function verifyPassword(password, hash) {
  return hashPassword(password) === hash;
}

/**
 * Generate a refresh token
 */
function generateRefreshToken() {
  return crypto.randomBytes(64).toString('hex');
}

/**
 * Validate user code format
 */
function isValidUserCode(code) {
  const pattern = /^YAV-[A-F0-9]{5}-[A-F0-9]{5}$/;
  return pattern.test(code);
}

module.exports = {
  generateUserCode,
  generateAuthKey,
  generateSessionToken,
  hashPassword,
  verifyPassword,
  generateRefreshToken,
  isValidUserCode
};
