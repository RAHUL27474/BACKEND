const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // Resolve the promise returned by the request handler and pass any errors to the next middleware.
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

// Export the asyncHandler function for use in other modules.
export { asyncHandler };


// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>{()=>{}}
// const asyncHandler = (func)=>()=>{}

// const asyncHandler = (fn)=>async(req, res, next)=>{
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }