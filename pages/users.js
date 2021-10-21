import userData from "../../models/userData";
import createHandler from "../../mongoose/createHandler";
const handler = createHandler();

handler.get(async (req, res) => {
    await getUser(req, res)
});

handler.post(async (req, res) => {
    await postUser(req, res)
});

const getUser = async (req, res) => {
    try {
        console.log('get request');
        userData.find().then(user => {
            console.log(user);
            res.status(200).json({ user })
        })
    }
    catch (error) {
        console.log(error);
    }
}

const postUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    const user = await new userData({
        firstName,
        lastName,
        email,
        password
    }).save()
    res.status(201).json(user)
}
export default (req, res) => handler.run(req, res)