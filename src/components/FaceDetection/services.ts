import * as faceapi from "face-api.js";



// Type definition for expression names
type ExpressionName =
  | "happy"
  | "sad"
  | "angry"
  | "fearful"
  | "disgusted"
  | "surprised"
  | "neutral";

// Function to load face-api.js models
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

// Function to find the highest scoring expression
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

// Function to analyze an image and detect facial expressions
async function analyzeImage(imageURL: string): Promise<string> {
  try {
    console.log("Analyzing facial expressions from image...");
    const img = await faceapi.fetchImage(imageURL);

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

// Function to manage the facial expression detection process
export default async function detectFacialExpression(
  imageURL: string
): Promise<ExpressionName | string> {
  // Validate the URL

  console.log(imageURL);
  if (!imageURL) {
    console.error("No valid image URL provided");
    return "Error: No valid image URL provided";
  }

  // Load the models
  const isModelLoaded = await loadFaceApiModels();
  if (!isModelLoaded) {
    console.error("Failed to load models");
    return "Error loading models";
  }

  // Analyze the image and return the result
  const result = await analyzeImage(imageURL);

  console.log(result);

  return result;
}
