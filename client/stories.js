/* eslint-disable no-undef */

const lateAF = (answers, match, genderPronoun) => { 
  return `The witching hour fast approaches, I can hear the howls of city coyotes as I am ${answers.methodOfTravel} to meet my date at the Lone Fir Cemetery. I'm wearing the ${answers.color} feather in my hair to signal to my date that I have arrived. While walking through the cemetery I saw 3 ${answers.animal} which I read as a good omen, probably due to me wearing my lucky ${answers.clothing}. I met ${match.name} in front of a mausoleum in the NE corner of the cemetery. I think to myself, they sure were brave to meet me here at this hour, let's see if ${genderPronoun} has what it takes to keep up with me. We sat around the cemetery for a while talking and drinking some ${answers.beverage} I brought with me. After a while I suggested ${answers.activity}, which is met with enthusiasm by my new partner in crime. We headed off, plotting and laughing maniacally as we traveled to ${answers.place}. We spent several hours ${answers.activity} and worked up quite the appetite. Fortunately, by the time we decided we were done, places started opening for breakfast. We headed off to $${answers.restaurant} for ${answers.food} where we spilled our guts to one another about our lives, hopes, and dreams. After spending these hours together we decided to meet up next Saturday night for ${answers.action} during the full moon at ${answers.venue}.  All in all, this turned out to be one of my best dates, if you can believe that.`;
};

const afternoon = (answers, match, genderPronoun) => {
  return `My date was quickly approaching so I quickly threw together an outfit. Throwing on those ${answers.color} pants I love and probably wear too often, but my date doesn't know that. I've never met ${match.name} before. I do hope this outfit will work for ${answers.activity}, we'll see. I headed to ${answers.place} by ${answers.methodOfTravel}. When I arrived ${match.name} was already there. They were wearing this outlandish shirt covered in ${answers.animal}. I both hated and loved it. What direction is this date going to head in I think to myself. We had an enjoyable time at ${answers.activity}. After which we were both famished and decided to head to ${answers.restaurant} for ${answers.beverage} and ${answers.food}. We both scarfed down our food, impressing each other and ourselves with how unembarrassed we were about doing so. ${genderPronoun} suggested maybe we continue the date and try ${answers.action} at ${answers.venue}. I agreed but as we got up to leave I knocked my ${answers.beverage} over and it spilled all over my ${answers.clothing}. I said I needed to stop by my place to get a different ${answers.clothing}. ${genderPronoun} was up for the adventure, so we left for my place. We did a lot of talking and laughing on the way. We never did end up going to ${answers.venue} to try ${answers.action}. But I think what we ended up doing was much more enjoyable...`;
};

const noon = (answers, match, genderPronoun) => {
  return `The day started off like any other, I woke up and got ready just like any other day. I had hope for this date but was unsure of what to expect, I’d had several lately and none of them approached anywhere but adequate. I left my house a little early because it can take a while to get to our rendezvous point around noon, especially while ${answers.methodOfTravel}. I was a little excited because we had decided to meet up at ${answers.restaurant} for ${answers.food} and ${answers.beverage} a favorite of mine. However, within a few minutes I expected this date to go nowhere.  ${match.name} looked great in their ${answers.color} ${answers.clothing} but looks was about as far as the greatness lasted. They constantly interrupted me while speaking and were rude to the staff at ${answers.restaurant}. Rudeness to wait staff is one thing I can not abide by, their jobs are hard enough as it is. I brought up my love of ${answers.animal} hoping that that could move the conversation in a lighter direction, but to no avail. ${match.name} would not let me hear the end of it on how much ${genderPronoun} hated ${answers.animal}. I couldn’t have been more annoyed or bored. I really wanted to leave and go ${answers.action} by myself. ${match.name} kept going on and on and on about themselves. It had only been an hour but it felt like I’ve been sitting in ${answers.restaurant} all day. After paying for my meal I told ${match.name} that we were very different people and that I was not interested in going to ${answers.venue} to finish the date. I quickly left and decided I had earned a treat. I stopped by my favorite (DESSERT) place and got the biggest (DESSERT) I could and enjoyed that while ${answers.activity} by myself.`;
};

const sunset = (answers, match, genderPronoun) => {
  return `I was supposed to meet ${match.name} at 5 PM at the ${answers.place}. But fate seemed to have a different idea for both of us. ${match.name} messaged me to let me know that they were going to be late because a pack of wild ${answers.animal} were ${answers.action} through the main road to ${answers.place}. ${genderPronoun} had to use an alternate way to get here and ended up ${answers.methodOfTravel} just to get here at all. If we had only met at ${answers.venue} we wouldn’t have had to deal with that. Not that having met at ${answers.venue} would have made the date itself any better. When ${match.name} arrived we had a laugh about the unfortunate beginning of the date. We quickly decided to start ${answers.activity} which really worked up our appetites. ${genderPronoun} really wanted ${answers.food} and that sounded great to me so we went to ${answers.restaurant} to get ${answers.food} and ${answers.beverage}. Feeling satiated with full bellies we walked around talking. The sun was going down which cast a beautiful ${answers.color} glow on everything. It was quite magical. I had a great night. ${match.name} and I decided to meet up again and we parted ways with a kiss.`;
};

const daybreak = (answers, match) => {
  return `It was daybreak when ${match.name} and I met up at ${answers.venue}. I was excited to go ${answers.activity} together because there is something about ${answers.activity} that really helps me see who a person really is deep down. We had a decent time and we're starving afterwards so we went to get some ${answers.food}. The food was great! After grabbing a bite we went for a walk through the park nearby and saw several ${answers.animal} playing. It was really adorable. It made me feel inspired, so I started ${answers.action}. I was feeling pretty confident about myself during the date because I was wearing my lucky ${answers.color} ${answers.clothing}. It always makes me feel more confident. Especially while I ${answers.methodOfTravel} through the ${answers.place}. All in all, things were going pretty well. The date was nearing completion but I still didn't feel like I really knew ${match.name}. So I thought why not go get some drinks? We went to ${answers.restaurant} and got ${answers.beverage}. We talked for what seemed like forever after that. 
  `;
};

function storySelect(answers, match, genderPronoun){
  if(answers.timeOfDay === 'daybreak'){
    return daybreak(answers, match, genderPronoun);
  } else if(answers.timeOfDay === 'noon'){
    return noon(answers, match, genderPronoun);
  } else if(answers.timeOfDay === 'afternoon'){
    return afternoon(answers, match, genderPronoun);
  } else if(answers.timeOfDay === 'sunset'){
    return sunset(answers, match, genderPronoun);
  } else if(answers.timeOfDay === 'late af'){
    return lateAF(answers, match, genderPronoun);
  }
}

module.exports = storySelect;