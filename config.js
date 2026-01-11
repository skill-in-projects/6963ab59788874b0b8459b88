// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi6963ab59788874b0b8459b88-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
