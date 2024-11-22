import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { LocationSchema } from '../models/Location';
import { RatSchema } from '../models/Rat';
import { MissionSchema } from '../models/Mission';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Locations = mongoose.model('Location', LocationSchema)
  Rats = mongoose.model('Rat', RatSchema)

  Missions = mongoose.model('Mission', MissionSchema)
}

export const dbContext = new DbContext()
