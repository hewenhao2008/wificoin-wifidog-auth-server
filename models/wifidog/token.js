'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
	token: String,
	startTime: Number,
	gwAddress: String,
	gwPort:	Number,
	gwId: String,
	client: String,
})

tokenSchema.index({token: 1});

const Token = mongoose.model('Token', tokenSchema);


export default Token
