"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceService = void 0;
const CryptoJS = require("crypto");
class VoiceService {
    constructor() {
        this.XF_HOST = "iat-api.xfyun.cn";
        this.XF_URL = "ws://iat-api.xfyun.cn/v2/iat";
        this.API_KEY = process.env.XF_API_KEY || "0a498aef7f7a7c9b86c85194fffb40dc";
        this.API_SECRET = process.env.XF_API_SECRET || "0dce79dce81154cddc01734fd8554236";
        this.ALGORITHM = "hmac-sha256";
    }
    async getWebSocketUrl() {
        var date = new Date().toUTCString();
        var headers = "host date request-line";
        var signatureOrigin = `host: ${this.XF_HOST}\ndate: ${decodeURIComponent(date)}\nGET /v2/iat HTTP/1.1`;
        var signatureSha = CryptoJS.createHmac("sha256", this.API_SECRET).update(signatureOrigin);
        var signature = signatureSha.digest("base64");
        var authorizationOrigin = `api_key="${this.API_KEY}", algorithm="${this.ALGORITHM}", headers="${headers}", signature="${signature}"`;
        var authorization = Buffer.from(authorizationOrigin, 'utf-8').toString('base64');
        const url = `${this.XF_URL}?authorization=${authorization}&date=${date}&host=${this.XF_HOST}`;
        return url;
    }
}
exports.VoiceService = VoiceService;
