import { auth } from "@/lib/auth";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignoutButton from "@/components/dashboard/sign-out-button";

const ProfilePage = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
    <div className="p-4">
      <Card className="mx-auto max-w-xl shadow-lg">
        <CardContent className="flex items-center space-x-8 p-6">
          <Avatar className="h-15 w-15">
            <AvatarImage
              src={session?.user?.image ?? ""}
              alt={session?.user?.name ?? ""}
            />
            <AvatarFallback>
              {(session?.user?.name ?? "U").slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-muted-foreground"
              >
                Name
              </Label>
              <div id="name" className="text-md font-bold">
                {session?.user?.name}
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-muted-foreground"
              >
                Email
              </Label>
              <div id="email" className="text-md font-bold">
                {session?.user?.email}
              </div>
            </div>
            <SignoutButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
