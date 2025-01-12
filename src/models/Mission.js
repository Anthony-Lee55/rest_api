import { Schema } from "mongoose";


export const MissionSchema = new Schema({
  codename: { type: String, required: true },
  objective: { type: String, required: true },
  year: { type: String, required: true },
  locationId: { type: Schema.ObjectId, ref: 'Location', required: true },
  ratId: { type: Schema.ObjectId, ref: 'Rat', required: true },
  completed: { type: Boolean, default: false, required: true },
}, { toJSON: { virtuals: true } })

MissionSchema.virtual('location', {
  localField: 'locationId',
  ref: 'Location',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('rat', {
  localField: 'ratId',
  ref: 'Rat',
  foreignField: '_id',
  justOne: true
})