<template>
  <div class="hover:brightness-120 transition-all duration-300 flex flex-col gap-y-2 rounded-3xl bg-sky-900/38 p-4">
    <div class="flex items-center justify-between gap-x-9">
      <h3 class="text-xs text-gray-400">#General 8 hours ago</h3>
      <h3 class="flex items-center gap-x-1 text-gray-400">
        <Icon class="text-white" name="mingcute:chat-3-fill" /> 225
      </h3>
    </div>
    <div class="px-2">
      <h3 class="text-lg">From Anime Title</h3>
      <h3 class="text-xs text-gray-400">Episode 1</h3>
      <p class="line-clamp-3 text-sm">
        Description Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Esse, dignissimos obcaecati quam autem vel illo voluptatem. Reiciendis
        quod vitae nisi, quasi beatae nihil sapiente nesciunt hic non fuga.
        Inventore, nam.
      </p>
    </div>
    <div class="group mt-2 flex w-fit items-center gap-x-1 px-1">
      <figure class="h-7 w-7 overflow-hidden rounded-full">
        <img class="h-full w-full" src="/Anime-Profile-Example.webp" alt="" />
      </figure>
      <h3
        class="text-sm text-gray-400 transition-colors duration-150 group-hover:text-blue-500"
      >
        @userhandle
      </h3>
    </div>
  </div>
</template>
