const errorResponse = (res, message, status = 500) => {
    return res.status(status).json({ message, status });
}

const successResponse = (res, status, message, data) => {
    return res.status(status).json({ message, status, data, length: data.length });
}

export { errorResponse, successResponse };