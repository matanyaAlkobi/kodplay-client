import * as faceapi from "face-api.js";

type ExpressionName =
  | "happy"
  | "sad"
  | "angry"
  | "fearful"
  | "disgusted"
  | "surprised"
  | "neutral";

// Load models
async function loadFaceApiModels(): Promise<boolean> {
  try {
    console.log("Loading face detection models...");
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]);
    console.log("Face detection models loaded successfully!");
    return true;
  } catch (error) {
    console.error("Error loading face detection models:", error);
    return false;
  }
}

// Get highest scoring expression
function getTopExpression(expressions: faceapi.FaceExpressions): string {
  let topExpression: ExpressionName = "neutral";
  let maxScore = 0;

  for (const [expression, score] of Object.entries(expressions)) {
    if (score > maxScore) {
      maxScore = score;
      topExpression = expression as ExpressionName;
    }
  }

  return topExpression;
}

// Create image element from URL or Base64
async function createImage(input: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; 
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);


    if (input.startsWith("data:image/")) {
      img.src = input;
    } else {
      img.src = input; 
    }
  });
}

// Analyze image
async function analyzeImage(imageInput: string): Promise<string> {
  try {
    console.log("Analyzing facial expressions from image...");
    const img = await createImage(imageInput);

    const detections = await faceapi
      .detectAllFaces(
        img,
        new faceapi.TinyFaceDetectorOptions({
          inputSize: 224,
          scoreThreshold: 0.5,
        })
      )
      .withFaceLandmarks()
      .withFaceExpressions();

    if (detections.length === 0) {
      console.log("No faces detected in the image");
      return "No faces found";
    }

    const expressions = detections[0].expressions;
    const topExpression = getTopExpression(expressions);
    console.log("Detected expression:", topExpression);
    return topExpression;
  } catch (error) {
    console.error("Error analyzing image:", error);
    return "Error analyzing image";
  }
}

// Main function
export default async function detectFacialExpression(
  imageInput: string
): Promise<ExpressionName | string> {
  if (!imageInput) {
    console.error("No valid image input provided");
    return "Error: No valid image input provided";
  }

  const isModelLoaded = await loadFaceApiModels();
  if (!isModelLoaded) {
    console.error("Failed to load models");
    return "Error loading models";
  }

  const result = await analyzeImage(imageInput);
  return result;
}
