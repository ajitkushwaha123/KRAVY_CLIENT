import {
  ArrowLeft,
  Trash2,
  StickyNote,
  ChevronRight,
  Clock3,
  Bike,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router";

const cartItems = [
  {
    id: 1,
    name: "Dhokla (500gm)",
    quantity: 1,
    price: 147,
    isVeg: true,
  },
  {
    id: 2,
    name: "Chicken Biryani",
    quantity: 2,
    price: 250,
    isVeg: false,
  },
  {
    id: 3,
    name: "Paneer Tikka",
    quantity: 1,
    price: 180,
    isVeg: true,
  },
];

const totalBill = 287.15;
const donationAmount = 2;

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-[#1C1C1C] flex flex-col">
      {/* Header */}
      <div className="flex items-center bg-white justify-between p-4 border-b">
        <span onClick={() => navigate("/")}>
          <ArrowLeft className="h-5 w-5" />
        </span>
        <h1 className="text-lg font-semibold">Haldiram’s</h1>
        <Trash2 className="h-5 w-5" />
      </div>

      {/* Body */}
      <div className="p-4 mx-4 my-4 rounded-md bg-white space-y-4">
        {/* Map through cartItems */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded flex items-center gap-4"
          >
            <div className="flex flex-1 flex-col">
              <p className="font-semibold flex items-center gap-2">
                <div
                  className={`border-2 p-1  ${
                    item.isVeg ? "border-green-300" : "border-red-300"
                  } rounded-md flex justify-center items-center`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.isVeg ? "bg-green-500" : "bg-red-500"
                    }`}
                    title={item.isVeg ? "Veg" : "Non-Veg"}
                  ></span>
                </div>
                {item.name}
              </p>
              <div className="flex items-center gap-1 text-green-600 text-sm cursor-pointer">
                <button>Edit</button>
                <span className="text-green-500">{">"}</span>
              </div>
            </div>
            <div className="flex items-center bg-green-50 border-2 border-green-500 rounded px-2">
              <button className="text-xl">-</button>
              <span className="px-2">{item.quantity}</span>
              <button className="text-xl">+</button>
            </div>
            <span className="text-sm font-medium">₹{item.price}</span>
          </div>
        ))}

        {/* Add more items */}
        <button className="text-green-600 text-sm">+ Add more items</button>

        <div className="border p-3 rounded flex items-center text-sm">
          <StickyNote className="h-4 w-4 mr-2" />
          <span>Add a note for the restaurant</span>
        </div>

        {/* Coupons */}
        <div className="flex justify-between items-center text-sm border p-3 rounded">
          <span className="font-medium">View all coupons</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>

      <div className="space-y-2 rounded-md bg-white p-4 mx-4 mb-4">
        {/* Delivery Time */}
        <div className="space-y-2">
          <p className="text-sm flex items-center">
            <Clock3 className="h-4 w-4 mr-1" />
            Delivery in <strong className="ml-1">45–50 mins</strong>
          </p>
          <p className="text-sm text-gray-500">
            Want this later? <u>Schedule it</u>
          </p>
        </div>

        {/* Fleet Info */}
        <div className="space-y-2 py-4">
          <p className="text-sm flex items-center">
            <Bike className="h-4 w-4 mr-1" />
            Only <strong className="ml-1">Standard Fleet</strong> available now
          </p>

          <div className="flex gap-2">
            <div className="flex-1 border-green-500 border p-4 rounded">
              <p className="font-semibold mb-1">Standard Fleet</p>
              <p className="text-sm text-gray-500">
                Our standard food delivery experience
              </p>
            </div>
            <div className="flex-1 bg-gray-100 p-4 rounded">
              <p className="font-semibold text-gray-400 mb-1">
                Special Veg-only Fleet
              </p>
              <p className="text-sm text-gray-400">
                Veg-only Fleet is temporarily unavailable
              </p>
            </div>
          </div>
        </div>

        {/* Total Bill */}
        <div className="flex justify-between items-center text-sm border-t pt-3">
          <div>
            <p className="font-medium">
              Total Bill <span className="text-black">₹{totalBill}</span>
            </p>
            <p className="text-gray-500">Incl. taxes and charges</p>
          </div>
          <ChevronRight className="h-4 w-4" />
        </div>

        {/* Donation */}
        <div className="bg-pink-100 p-4 rounded-md">
          <p className="font-semibold text-sm flex items-center gap-1">
            Let’s serve a brighter future <Info className="h-3 w-3" />
          </p>
          <p className="text-xs mt-1">
            Through nutritious meals, you can empower young minds for greatness
          </p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm">Donate to Feeding India</p>
            <div className="flex items-center gap-2">
              <p className="border px-2 py-1 rounded text-sm">
                ₹{donationAmount}
              </p>
              <button className="text-green-600 text-sm px-3 py-1 border border-green-600 rounded">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 px-4 pb-4 text-gray-500 text-xs">
        <h2 className="font-semibold text-sm text-gray-600 mb-1">
          CANCELLATION POLICY
        </h2>
        <p>
          Help us reduce food waste by avoiding cancellations. The amount paid
          is non-refundable after placing the order.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="sticky bottom-0 bg-white p-4 shadow-md mt-auto">
        <button className="bg-green-600 text-white w-full text-sm py-3 rounded">
          Add Address at next step
        </button>
      </div>
    </div>
  );
}
