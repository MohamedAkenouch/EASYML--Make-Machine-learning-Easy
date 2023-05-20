import mongoose from 'mongoose';

const ModelSchema = mongoose.Schema({
    name: String,
    owner: String,
    type: String,
    description: String,
    selectedFile: String,
    permission: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ModelData = mongoose.model('ModelData', ModelSchema);

export default ModelData;