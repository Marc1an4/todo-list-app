import Joi from 'joi';

export const createTaskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    completed: Joi.boolean()
});

export const updateTaskSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    completed: Joi.boolean(),
}).min(1);