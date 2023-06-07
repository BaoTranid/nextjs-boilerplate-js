export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'Done',
    },
    {
      id: 2,
      name: 'In',
    },
    {
      id: 3,
      name: 'Out',
    },
  ]);
}
