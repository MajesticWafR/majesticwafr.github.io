// Define an array of allowed IP addresses
const allowedIPs = [
  '192.168.0.1',
  '192.168.0.2',
  '10.0.0.1'
];

// Define a function to check if an IP address is in the allowed list
function isAllowedIP(ip) {
  return allowedIPs.includes(ip);
}

// Export a middleware function that checks the IP address of incoming requests
module.exports = function(req, res, next) {
  const ip = req.ip;
  if (isAllowedIP(ip)) {
    // The IP address is allowed, continue processing the request
    next();
  } else {
    // The IP address is not allowed, return a 403 Forbidden status
    res.status(403).send('Access denied');
  }
};
