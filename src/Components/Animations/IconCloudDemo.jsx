import React from "react";
import IconCloud from "./IconCloud"; // Adjust the path as necessary

const slugs = [
  'chatgpt',
  'openai',
  'tensorflow',
  'pytorch',
  'huggingface',
  'transformers',
  'spacy',
  'rasa',
  'kaggle',
  'colab',
  'deeplearning',
  'sklearn',
  'nltk',
  'nvidia',
  'databricks',
  'azure',
  'aws',
  'gcp',
  'mlflow',
  'cortex',
  'kubeflow',
  'alteryx',
  'airflow',
  'caffe',
  'fastai',
  'bert',
  'openvino',
  'datarobot',
  'gpt3'
  // Add more AI-related slugs as needed
];

function IconCloudDemo() {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#F8FAFC]">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
