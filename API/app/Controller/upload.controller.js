const uploadFile = require("../Middleware/upload");

exports.upload = async(req, res) => {
    try {
        await uploadFile(req, res);


        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

exports.getImage = (req, res, next) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/PDF/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
}