function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const form = $("Validated Formstack Data").first().json;
const row = $("Get Round Robin Index").first()?.json ?? {};
const currentIndex = Number(row.currentIndex ?? 0);

const USERS = {
  user1: "U0BD0QGKLRG",
  user2: "U0BD4FKB50C",
  user3: "U0BE4L71NBA",
  user4: "U0BE84QH6JZ",
};

// Routing
const ROUTES = {
  "business-registration": [USERS.user1, USERS.user2],
  "virtual-office": [USERS.user1, USERS.user2],
  coworking: [USERS.user3, USERS.user4],
};

// Default routing
const DEFAULT_POOL = [USERS.user1, USERS.user2, USERS.user3];

// Get the matching pool
const pool = ROUTES[slugify(form.service)] ?? DEFAULT_POOL;

// Pick assignee
const assignedUser = pool[currentIndex % pool.length];

// Calculate next index
const nextIndex = (currentIndex + 1) % pool.length;

return [
  {
    json: {
      // Slack values
      channel: "C0BDWTAEFKJ",
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.message,

      // Assignment
      assignedUser,
      slackMention: `<@${assignedUser}>`,
      service: form.service,

      // Save this back to your Data Store
      currentIndex,
      nextIndex,
    },
  },
];
