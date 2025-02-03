"use client";
import React, { Suspense } from "react";
import Team_Profile from "./Team_Profile";
import { TeamMembers } from '@/app/page';
const Team = ({teamMembers}:{teamMembers:TeamMembers}) => {
 
  return (
      <div className="grid">
        <div className="">
            <Team_Profile name={teamMembers.title} batch={teamMembers.desc} img={''}/>
        </div>
      </div>
  )
}
export default Team