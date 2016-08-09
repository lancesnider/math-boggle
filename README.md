# Math Boggle

It's like Boggle, but for math nerds. The longer the equation and the more complex operators, the more points you'll earn. 

#### Rules
1. Each equation needs at least one operator (bad: `34=34`)
2. You can't use zeros as a freebie (nope: `3489*0=0`)
3. You _can_ use negatives (sure: `-12+20=8`)

# For Devs

#### Install & Run

```
npm install
npm start
```

#### My First React Project

I did this project to try to wrap my head around React and functional, vs OO programming. If you look at the code, you'll probably notice that this falls somewhere in the ugly middle. :) If I build a v2, here are the big things I'd do differently: 
1. I'd Flux to avoid the spiderweb of updating components
2. Now that I kinda understand functional programming, I'd code accordingly
3. Rather than using `eval`, I'd use functions for each operation (maybe use reverse Polish notation)
