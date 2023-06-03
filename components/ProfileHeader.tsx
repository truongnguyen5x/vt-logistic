import ProfileImg from "@assets/images/icons/profile.svg";
import ProfileLightImg from "@assets/images/icons/profile_light.svg";
import Image from "next/image";
import { Fragment, useState } from "react";

const ProfileHeader = () => {
  return (
    <Fragment>
      <div className="profile-header" title="Unavailable">
        <Image width={30} height={30} src={ProfileImg} alt="profile" />
        <Image width={30} height={30} src={ProfileLightImg} alt="profile" />
      </div>
    </Fragment>
  );
};

export default ProfileHeader;
