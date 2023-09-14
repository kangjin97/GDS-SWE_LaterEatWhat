import mongoose from "mongoose";

const SuggestionSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        suggestion: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Suggestion = mongoose.model('Suggestion', SuggestionSchema);
