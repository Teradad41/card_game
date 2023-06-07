import { CONTAINER } from '../config'

export class StartView {
  public static render(): void {
    if (CONTAINER)
      CONTAINER.innerHTML = `
    <div class="background-container flex items-center justify-center">
            <form class="">
                <div class="mb-4">
                    <label class="block mb-2 font-bold text-white text-xl">NAME</label>
                    <input class="w-full px-3 py-2 border rounded-xl focus:outline-green-600 shadow-xl"
                        id="userName"
                        type="text"
                        placeholder="Name"
                        required
                    >
                </div>
                <div class="mb-9">
                    <label class="block mb-2 font-bold text-white text-xl">GAME</label>
                    <select class="w-full px-3 py-3 border rounded-xl focus:outline-green-600 shadow-xl" id="gameType">
                        <option value="blackjack">BlackJack</option>
                        <option value="porker" disabled>Porker - coming soon -</option>
                    </select>
                </div>
                <button class="w-full mt-3 px-4 py-3 font-bold text-white bg-green-600 rounded-xl hover:bg-green-500 shadow-xl transition-colors duration-300"
                    type="submit">
                    START GAME
                </button>
            </form>
        </div>
    `
  }
}