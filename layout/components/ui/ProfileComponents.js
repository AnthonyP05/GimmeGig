import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, MapPin, Music } from "lucide-react";

// 🎭 Profile Header Component
export function ProfileHeader({ name, avatar, coverImage, tags }) {
  return (
    <div className="relative bg-gray-900 text-white rounded-2xl overflow-hidden">
      <img src={coverImage || "/placeholder-cover.jpg"} alt="Cover" className="w-full h-60 object-cover opacity-80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img src={avatar || "/placeholder-avatar.png"} alt="Profile" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
        <h1 className="text-3xl font-bold mt-2">{name || "Unknown Name"}</h1>
        <p className="text-sm text-gray-300">{tags?.join(" • ") || "Genre / Event Type"}</p>
      </div>
    </div>
  );
}

// ⭐ Quick Info Section
export function QuickInfo({ rating, reviews, eventsPlayed }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 text-center">
      <div className="flex flex-col items-center">
        <Star className="text-yellow-400" size={24} />
        <span className="font-semibold">{rating || "N/A"} ⭐</span>
        <span className="text-gray-500 text-sm">({reviews || 0} reviews)</span>
      </div>
      <div className="flex flex-col items-center">
        <Calendar className="text-blue-500" size={24} />
        <span className="font-semibold">{eventsPlayed || 0} Events</span>
        <span className="text-gray-500 text-sm">Gigs Hosted/Performed</span>
      </div>
    </div>
  );
}

// 📄 About Section
export function AboutSection({ bio }) {
  return (
    <Card className="mt-6">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-gray-600 mt-2">{bio || "No bio available."}</p>
      </CardContent>
    </Card>
  );
}

// 🎶 Media Gallery
export function MediaGallery({ gallery }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Gallery</h2>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {gallery?.length > 0 ? (
          gallery.map((image, index) => (
            <img key={index} src={image} alt="Gallery" className="rounded-lg w-full h-28 object-cover" />
          ))
        ) : (
          <p className="text-gray-500 text-sm mt-2">No media available.</p>
        )}
      </div>
    </div>
  );
}

// 🎟 Booking Section
export function BookingSection({ type }) {
  return (
    <div className="mt-6 text-center">
      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
        {type === "artist" ? "Request to Book" : "Apply to Perform"}
      </Button>
    </div>
  );
}

// 📝 Reviews Section
export function ReviewsSection({ reviewsList }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Reviews</h2>
      {reviewsList?.length > 0 ? (
        reviewsList.map((review, index) => (
          <Card key={index} className="mt-2">
            <CardContent className="p-4">
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-500">— {review.reviewer}</p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-gray-500 text-sm mt-2">No reviews yet.</p>
      )}
    </div>
  );
}
