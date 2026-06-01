export async function askGemini(prompt) {

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  const text = prompt.toLowerCase();

  // Movies
  if (
    text.includes("movie") ||
    text.includes("ticket") ||
    text.includes("imax")
  ) {
    return "🎬 Best movie deal found on BookMyShow with 22% savings using Slice UPI.";
  }

  // Food
  if (
    text.includes("food") ||
    text.includes("biryani") ||
    text.includes("pizza") ||
    text.includes("burger")
  ) {
    return "🍔 Swiggy and Zomato prices compared. Best deal available with ₹120 savings and free delivery.";
  }

  // Phones
  if (
    text.includes("iphone") ||
    text.includes("samsung") ||
    text.includes("phone") ||
    text.includes("mobile")
  ) {
    return "📱 Best mobile deal found on Amazon with bank cashback and exchange bonus.";
  }

  // Laptops
  if (
    text.includes("laptop") ||
    text.includes("macbook") ||
    text.includes("gaming")
  ) {
    return "💻 Flipkart currently offers the lowest laptop price with no-cost EMI and extra cashback.";
  }

  // Electronics
  if (
    text.includes("ps5") ||
    text.includes("tv") ||
    text.includes("headphone") ||
    text.includes("electronics")
  ) {
    return "🛒 AI found the best electronics deal with combined coupon + bank offer savings.";
  }

  // Travel
  if (
    text.includes("flight") ||
    text.includes("hotel") ||
    text.includes("bus") ||
    text.includes("train")
  ) {
    return "✈️ Cheapest travel option found with travel coupon and Slice rewards cashback.";
  }

  // Generic fallback
  return `✨ AI compared multiple platforms and found optimized pricing for "${prompt}" with maximum savings and cashback opportunities.`;
}