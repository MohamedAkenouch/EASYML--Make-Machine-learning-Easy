import mongoose from 'mongoose';

const ExpertSchema = mongoose.Schema({
    name: String,
    description: String,
    selectedFile: String,
    idUser: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    
})

var ExpertData = mongoose.model('ExpertData', ExpertSchema);

export default ExpertData;