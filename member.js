function skillsMember(){
  return {
    name: "Member",
    description: "A member of the team with specific skills.",
    skills: ["JavaScript", "Python", "React"],
    getSkills: function() {
      return this.skills.join(", ");
    },
    addSkill: function(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
    }
  };
}