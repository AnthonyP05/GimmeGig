import { Card, CardContent } from "./components/ui/card"; // Corrected import path
import { Button } from "./components/ui/button"; // Corrected import path
import Star from "./components/icons/Star"; // Corrected import statement
import Calendar from "./components/icons/Calendar"; // Corrected import statement

export default function ProfilePage({ profile }) {
  if (!profile) return <div>Loading...</div>; // Add this check

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="relative bg-gray-900 text-white rounded-2xl overflow-hidden">
        <img
          src={profile.coverImage}
          alt="Cover Image"
          className="w-full h-60 object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src={profile.avatar}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-2">{profile.name}</h1>
          <p className="text-sm text-gray-300">{profile.tags.join(" • ")}</p>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="mt-8 grid grid-cols-2 gap-4 text-center">
        <div className="flex flex-col items-center">
          <Star className="text-yellow-400" size={24} />
          <span className="font-semibold">{profile.rating} ⭐</span>
          <span className="text-gray-500 text-sm">({profile.reviewsCount} reviews)</span>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="text-blue-500" size={24} />
          <span className="font-semibold">{profile.eventsPlayed} Events</span>
          <span className="text-gray-500 text-sm">Gigs Hosted/Performed</span>
        </div>
      </div>

      {/* About Section */}
      <Card className="mt-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-gray-600 mt-2">{profile.bio}</p>
        </CardContent>
      </Card>

      {/* Media Gallery */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {profile.gallery.map((image, index) => (
            <img key={index} src={image} alt="Gallery" className="rounded-lg w-full h-28 object-cover" />
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="mt-6 text-center">
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
          {profile.type === "artist" ? "Request to Book" : "Apply to Perform"}
        </Button>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {profile.reviewsList.map((review, index) => (
          <Card key={index} className="mt-2">
            <CardContent className="p-4">
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-500">— {review.reviewer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}