<template>
              <div
            class="relative flex items-center justify-center rounded-2xl bg-gray-900/60 shadow shadow-sky-400/20"
          >
            <!-- TRENDCHATS__Header -->
            <div
              class="absolute top-0 z-5 flex w-full justify-between rounded-2xl bg-linear-to-br from-violet-950/70 to-sky-950/70 px-9 py-3 text-center shadow shadow-sky-300/30 backdrop-blur-sm"
            >
              <h1 class="flex items-center gap-x-4 text-3xl">
                <div
                  class="flex w-fit items-center justify-center rounded-full bg-linear-to-br from-violet-700/70 to-sky-700/70 p-1"
                >
                  <Icon class="text-amber-300/90" name="mingcute:chat-1-line" />
                </div>
                Top Chats
              </h1>
              <div
                class="relative w-fit rounded border border-violet-400/60 bg-violet-950 px-4 py-1 inset-shadow-sm hover:brightness-110"
              >
                View All
              </div>
            </div>
            <div
              class="flex max-h-200 flex-col gap-y-4 overflow-y-scroll p-9 pt-24"
            >
              <!-- TRENDCHATS__Chat-bubble -->
              <TopChatBubble v-for="(_, i) in 4" />
            </div>
          </div>
</template>