import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardWithForm({ profilePic, profileBanner, name }) {
  return (
    <div className="w-[350px] h-[160px] relative">
      <Card
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${profileBanner})`}}
      >
        <CardHeader>
          <Avatar className="w-[90px] h-auto">
            <AvatarImage src={profilePic} alt="@shadcn" />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
