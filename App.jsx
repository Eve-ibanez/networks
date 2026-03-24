import "./App.css";
import Description from "./Component/Description";
import Network from "./Component/Networks";
import tiktok from "./img/tiktok.png";
import ig from "./img/ig.png";
import youtube from "./img/youtube.png";
import twitch from "./img/twitch.png";
import wpp from "./img/wpp.png";
import discord from "./img/discord.webp";
import cz from "./img/logo.ico";

function App() {
  return (
    <div className="div-container">
      <Description></Description>
      <div className="div-container_networks">
        <Network
          image={tiktok}
          name="Tiktok"
          network="tiktok"
          url="https://www.tiktok.com/@brianc.z"
        />
        <Network
          image={ig}
          name="Instagram"
          network="instagram"
          url="https://www.instagram.com/Briancaz/"
        />
        <Network
          image={youtube}
          name="Youtube"
          network="youtube"
          url="https://www.youtube.com/@brianczl"
        />
        <Network
          image={twitch}
          name="Twitch"
          network="twitch"
          url="https://www.twitch.tv/brianczl"
        />
        <Network
          image={cz}
          name="CZ mu"
          network="czmu"
          url="https://czmu.com.ar/"
        />
        <Network
          image={wpp}
          name="Canal de WPP"
          network="wpp"
          url="https://whatsapp.com/channel/0029VaRb3drJP20zz0U3Oo45"
        />
        <Network
          image={discord}
          name="Discord"
          network="discord"
          url="https://discord.com/invite/4zvn73MKQp"
        />
      </div>
    </div>
  );
}

export default App;
