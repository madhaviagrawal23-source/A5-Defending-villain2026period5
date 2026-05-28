import { Image } from "@heroui/image";

import { title } from "@/components/primitives";
export default function A5Page() {
  return (
    <div>
      <h1 className={title()}>A5:Defending the Villain</h1>
      <p>This is where we defend the villain.</p>
      <Image
        alt="qi min intro"
        src="https://i.redd.it/zizrrgsqifog1.jpeg"
        width={200}
      />
      <Image
        alt="qi min left angle"
        src="https://www.newhanfu.com/wp-content/uploads/2026/03/Why-Qi-Min-Truly-Loved-Yu-Qianqian-in-Pursuit-of-Jade-3.jpg"
        width={200}
      />
      <Image
        alt="qi min right front angle"
        src="https://preview.redd.it/character-appreciation-qi-min-pursuit-of-jade-v0-szax28x3tfog1.jpeg?width=876&format=pjpg&auto=webp&s=82743fafdedba63baeb1339059a2f4a279857456"
        width={200}
      />
      <h1>Why Qi Min is a hidden hero rather than a villain:</h1>
      <ol>
        <li>Saved his wife Yu Qianqian time and time again.</li>
        <li>
          Did not kill his child because his wife said so even though it would
          have been best if he had.
        </li>
        <li>Sacrificed himself for his wife time and time again. </li>
        <li>Took down the puppet emperor.</li>
        <li>
          Gave his life for his wife when she poisoned him, knowing it was the
          way he could restore order to the world so his wife could be happy.
        </li>
        <li>Helped take down the corrupt Wei and Li factions.</li>
        <li>Indirectly helped the Xie faction rise to power.</li>
        <li>Indirectly helped the main character Fan Changyu and Xie Zheng.</li>
        <li> Helped a lot of people reunite or unite with their soulmates.</li>
      </ol>
    </div>
  );
}
