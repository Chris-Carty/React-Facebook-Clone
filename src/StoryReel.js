import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/11/copernicus_sentinel-6_lifts_off_on_a_spacex_falcon_9_rocket/22340698-1-eng-GB/Copernicus_Sentinel-6_lifts_off_on_a_SpaceX_Falcon_9_rocket_pillars.jpg"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
        title="Elon Musk"
      />
      <Story
        image="https://i.redd.it/pwy7qal14g861.png"
        profileSrc="https://static01.nyt.com/images/2021/02/04/business/03ROARING-KITTY-01/03ROARING-KITTY-01-mediumSquareAt3X.jpg"
        title="Roaring Kitty"
      />
      <Story
        image="https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1"
        profileSrc="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg"
        title="Bill Gates"
      />
      <Story
        image="https://www.statista.com/graphic/1/268136/top-15-countries-based-on-number-of-facebook-users.jpg"
        profileSrc="https://about.fb.com/wp-content/uploads/2019/08/sheryl-sandberg.jpg?fit=3240%2C2160"
        title="Sheryl Sandberg"
      />
      <Story
        image="https://shop.ee.co.uk/medias/google-pixel-5-black-gwp-detail1-Format-960?context=bWFzdGVyfHJvb3R8NzA2NzZ8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL3Jvb3QvaDM1L2g2Mi85NTQ5ODE5NzQwMTkwL2dvb2dsZS1waXhlbC01LWJsYWNrLWd3cC1kZXRhaWwxX0Zvcm1hdC05NjB8MzEyNGQ4ODliOTNhZDBiMjEwMjNmODIwNDBiNmFhZGE4NzU2MWNkYjcxMzUyNGJkNTRlNmZiZDc5ZjIwYjhkNw"
        profileSrc="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
        title="Sundar Pichai"
      />
    </div>
  );
}

export default StoryReel;
