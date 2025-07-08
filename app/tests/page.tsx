const tests = [
  {
    id: "vitamin-d",
    name: "Vitamin D Test",
    price: 59,
    description: "Check your vitamin D levels for bone and immune health.",
  },
  {
    id: "iron-panel",
    name: "Iron Panel",
    price: 89,
    description: "Assess iron, ferritin, and transferrin to detect deficiencies.",
  },
  {
    id: "hormone-check",
    name: "Hormone Panel",
    price: 129,
    description: "Includes testosterone, oestrogen, LH, FSH, and more.",
  },
];

export default function TestsPage() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Tests</h1>
      <div className="space-y-6">
        {tests.map((test) => (
          <div key={test.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{test.name}</h2>
            <p className="text-gray-700 mb-2">{test.description}</p>
            <p className="font-bold">${test.price}</p>
            <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}