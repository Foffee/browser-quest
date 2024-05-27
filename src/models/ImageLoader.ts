/* Get image sources */

// @ts-ignore
import TerrainImg from '../../assets/images/terrain.png';

// @ts-ignore
import WaterFallImg from '../../assets/images/waterfall.png';

// @ts-ignore
import BeachImg from '../../assets/images/beach.png';

// @ts-ignore
import SandImg from '../../assets/images/sand.png';

// @ts-ignore
import SnowImg from '../../assets/images/snow.png';

// @ts-ignore
import TerrainExtraImg from '../../assets/images/terrain_extra.png';

// @ts-ignore
import PlantsImg from '../../assets/images/plants.png';

// @ts-ignore
import PlayerImg from '../../assets/images/player.png';

/* Load the images */

const Terrain = document.createElement('img');
Terrain.src = TerrainImg;

const WaterFall = document.createElement('img');
WaterFall.src = WaterFallImg;

const Beach = document.createElement('img');
Beach.src = BeachImg;

const Sand = document.createElement('img');
Sand.src = SandImg;

const Snow = document.createElement('img');
Snow.src = SnowImg;

const TerrainExtra = document.createElement('img');
TerrainExtra.src = TerrainExtraImg;

const Plants = document.createElement('img');
Plants.src = PlantsImg;

const Player = document.createElement('img');
Player.src = PlayerImg;

export default {
    Terrain,
    Beach,
    WaterFall,
    Sand,
    Snow,
    TerrainExtra,
    Plants,
    Player

};  
