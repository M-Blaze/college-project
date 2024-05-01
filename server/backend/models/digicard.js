
import mongoose from 'mongoose';
const { Schema } = mongoose;

const digiCardSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id: String,
  cardStyles: Object,
  cardElements: Array
});

const digiCard = mongoose.model('digiCard', digiCardSchema);

export default digiCard
