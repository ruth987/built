"use client";
import React from "react";
import Container from "./container";
import { LightBulbIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { GithubIcon } from "./icons/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, LogOutIcon } from "lucide-react";

const Header = () => {
  const { data: session, isPending, error } = authClient.useSession();
  console.log("Session", session);

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="sticky top-0 z-50 py-4 backdrop-filter backdrop-blur-lg">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <LightBulbIcon className="h-6" />
            <h1 className="text-2xl font-bold">Built</h1>
          </div>

          <div className="flex items-center gap-5">
            {!session ? (
              <Link href="/auth/sign-in">
                <button className="btn-primary">Sign In</button>
              </Link>
            ) : (
              <div>
                <Link href="/auth/sign-up">
                  <button className="btn-primary">Post Your Project</button>
                </Link>
              </div>
            )}

            <Link
              className="flex gap-2 items-center border px-4 py-2 rounded-full cursor-pointer transition duration-1000 hover:shadow-[0_0_50px_15px_rgba(255,255,255,0.1),0_0_100px_40px_rgba(255,255,255,0.1)]"
              href="https://github.com/Manuel-heav/built"
              target="_blank"
            >
              <GithubIcon />
              <p>Star</p>
            </Link>
            {session && (
              <div
                onClick={handleSignOut}
                className="cursor-pointer hover:scale-105 duration-200 ease-in-out"
              >
                <LogOutIcon />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
