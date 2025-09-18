import { useEffect, useState } from "react";
import detectFacialExpression from "./services";
import { useLocation } from "react-router";
import Playlist from "../Playlist";

export default function FaceDetection() {
  const [isDetected, setIsDetected] = useState<boolean>(false);
  const [expression, setExpression] = useState<string>("");
  const location = useLocation();
  const imageURL = location.state?.imageURL || "";
  useEffect(() => {
    const fetchData = async () => {
      if (imageURL) {
        const result = await detectFacialExpression(imageURL);
        setIsDetected(true);
        setExpression(result);
      } else {
        setExpression("No image URL provided for facial expression detection.");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="face-detection-result">
      {isDetected ? <Playlist mood={expression} /> : "Detecting face..."}
    </div>
  );
}
