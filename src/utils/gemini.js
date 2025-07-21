import { GoogleGenAI } from "@google/genai";
import { API_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: API_KEY });


export default ai;