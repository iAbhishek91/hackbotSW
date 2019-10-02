const jsonData = {
  fName: 'Abhishek',
  lName: 'das',
};

export default async (req, res) => {
  // const { longitude, latitude } = req.headers;
  // const { status, json } = await seasonHelper(longitude, latitude);
  res.status(200).json(jsonData);
};