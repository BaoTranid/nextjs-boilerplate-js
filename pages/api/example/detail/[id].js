export default function handler(req, res) {
  const { id } = req.query;
  const list = [
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
  ];
  res.status(200).json(list?.find(e => e?.id?.toString() === id) ?? null);
}
