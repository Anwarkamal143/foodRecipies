import { models, model } from "mongoose"

export function loadModel(modelName:string, modelSchema:any) {
  return models[modelName] // Check if the model exists
    ? model(modelName) // If true, only retrieve it
    : model(modelName, modelSchema) // If false, define it
}
