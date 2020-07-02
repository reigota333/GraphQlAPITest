module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateChatRoom {
  count: Int!
}

type AggregateClub {
  count: Int!
}

type AggregateFriend {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserClub {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type ChatRoom {
  id: ID!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type ChatRoomConnection {
  pageInfo: PageInfo!
  edges: [ChatRoomEdge]!
  aggregate: AggregateChatRoom!
}

input ChatRoomCreateInput {
  users: UserCreateManyWithoutChatRoomsInput
}

input ChatRoomCreateManyWithoutUsersInput {
  connect: [ChatRoomWhereUniqueInput!]
}

input ChatRoomCreateOneInput {
  create: ChatRoomCreateInput
  connect: ChatRoomWhereUniqueInput
}

type ChatRoomEdge {
  node: ChatRoom!
  cursor: String!
}

enum ChatRoomOrderByInput {
  id_ASC
  id_DESC
}

type ChatRoomPreviousValues {
  id: ID!
}

input ChatRoomScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [ChatRoomScalarWhereInput!]
  OR: [ChatRoomScalarWhereInput!]
  NOT: [ChatRoomScalarWhereInput!]
}

type ChatRoomSubscriptionPayload {
  mutation: MutationType!
  node: ChatRoom
  updatedFields: [String!]
  previousValues: ChatRoomPreviousValues
}

input ChatRoomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChatRoomWhereInput
  AND: [ChatRoomSubscriptionWhereInput!]
  OR: [ChatRoomSubscriptionWhereInput!]
  NOT: [ChatRoomSubscriptionWhereInput!]
}

input ChatRoomUpdateDataInput {
  users: UserUpdateManyWithoutChatRoomsInput
}

input ChatRoomUpdateInput {
  users: UserUpdateManyWithoutChatRoomsInput
}

input ChatRoomUpdateManyWithoutUsersInput {
  delete: [ChatRoomWhereUniqueInput!]
  connect: [ChatRoomWhereUniqueInput!]
  set: [ChatRoomWhereUniqueInput!]
  disconnect: [ChatRoomWhereUniqueInput!]
  deleteMany: [ChatRoomScalarWhereInput!]
}

input ChatRoomUpdateOneRequiredInput {
  create: ChatRoomCreateInput
  update: ChatRoomUpdateDataInput
  upsert: ChatRoomUpsertNestedInput
  connect: ChatRoomWhereUniqueInput
}

input ChatRoomUpsertNestedInput {
  update: ChatRoomUpdateDataInput!
  create: ChatRoomCreateInput!
}

input ChatRoomWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [ChatRoomWhereInput!]
  OR: [ChatRoomWhereInput!]
  NOT: [ChatRoomWhereInput!]
}

input ChatRoomWhereUniqueInput {
  id: ID
}

type Club {
  id: ID!
  name: String!
  userClub(where: UserClubWhereInput, orderBy: UserClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserClub!]
  email: String!
  city: String!
}

type ClubConnection {
  pageInfo: PageInfo!
  edges: [ClubEdge]!
  aggregate: AggregateClub!
}

input ClubCreateInput {
  name: String!
  userClub: UserClubCreateManyWithoutClubInput
  email: String!
  city: String!
}

input ClubCreateOneWithoutUserClubInput {
  create: ClubCreateWithoutUserClubInput
  connect: ClubWhereUniqueInput
}

input ClubCreateWithoutUserClubInput {
  name: String!
  email: String!
  city: String!
}

type ClubEdge {
  node: Club!
  cursor: String!
}

enum ClubOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  city_ASC
  city_DESC
}

type ClubPreviousValues {
  id: ID!
  name: String!
  email: String!
  city: String!
}

type ClubSubscriptionPayload {
  mutation: MutationType!
  node: Club
  updatedFields: [String!]
  previousValues: ClubPreviousValues
}

input ClubSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClubWhereInput
  AND: [ClubSubscriptionWhereInput!]
  OR: [ClubSubscriptionWhereInput!]
  NOT: [ClubSubscriptionWhereInput!]
}

input ClubUpdateInput {
  name: String
  userClub: UserClubUpdateManyWithoutClubInput
  email: String
  city: String
}

input ClubUpdateManyMutationInput {
  name: String
  email: String
  city: String
}

input ClubUpdateOneRequiredWithoutUserClubInput {
  create: ClubCreateWithoutUserClubInput
  update: ClubUpdateWithoutUserClubDataInput
  upsert: ClubUpsertWithoutUserClubInput
  connect: ClubWhereUniqueInput
}

input ClubUpdateWithoutUserClubDataInput {
  name: String
  email: String
  city: String
}

input ClubUpsertWithoutUserClubInput {
  update: ClubUpdateWithoutUserClubDataInput!
  create: ClubCreateWithoutUserClubInput!
}

input ClubWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  userClub_every: UserClubWhereInput
  userClub_some: UserClubWhereInput
  userClub_none: UserClubWhereInput
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  AND: [ClubWhereInput!]
  OR: [ClubWhereInput!]
  NOT: [ClubWhereInput!]
}

input ClubWhereUniqueInput {
  id: ID
  email: String
}

type Friend {
  id: ID!
  user1: User!
  user1ID: ID!
  user2: User!
  user2ID: ID!
}

type FriendConnection {
  pageInfo: PageInfo!
  edges: [FriendEdge]!
  aggregate: AggregateFriend!
}

input FriendCreateInput {
  user1: UserCreateOneWithoutFriendsInput!
  user1ID: ID!
  user2: UserCreateOneInput!
  user2ID: ID!
}

input FriendCreateManyWithoutUser1Input {
  create: [FriendCreateWithoutUser1Input!]
  connect: [FriendWhereUniqueInput!]
}

input FriendCreateWithoutUser1Input {
  user1ID: ID!
  user2: UserCreateOneInput!
  user2ID: ID!
}

type FriendEdge {
  node: Friend!
  cursor: String!
}

enum FriendOrderByInput {
  id_ASC
  id_DESC
  user1ID_ASC
  user1ID_DESC
  user2ID_ASC
  user2ID_DESC
}

type FriendPreviousValues {
  id: ID!
  user1ID: ID!
  user2ID: ID!
}

input FriendScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user1ID: ID
  user1ID_not: ID
  user1ID_in: [ID!]
  user1ID_not_in: [ID!]
  user1ID_lt: ID
  user1ID_lte: ID
  user1ID_gt: ID
  user1ID_gte: ID
  user1ID_contains: ID
  user1ID_not_contains: ID
  user1ID_starts_with: ID
  user1ID_not_starts_with: ID
  user1ID_ends_with: ID
  user1ID_not_ends_with: ID
  user2ID: ID
  user2ID_not: ID
  user2ID_in: [ID!]
  user2ID_not_in: [ID!]
  user2ID_lt: ID
  user2ID_lte: ID
  user2ID_gt: ID
  user2ID_gte: ID
  user2ID_contains: ID
  user2ID_not_contains: ID
  user2ID_starts_with: ID
  user2ID_not_starts_with: ID
  user2ID_ends_with: ID
  user2ID_not_ends_with: ID
  AND: [FriendScalarWhereInput!]
  OR: [FriendScalarWhereInput!]
  NOT: [FriendScalarWhereInput!]
}

type FriendSubscriptionPayload {
  mutation: MutationType!
  node: Friend
  updatedFields: [String!]
  previousValues: FriendPreviousValues
}

input FriendSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FriendWhereInput
  AND: [FriendSubscriptionWhereInput!]
  OR: [FriendSubscriptionWhereInput!]
  NOT: [FriendSubscriptionWhereInput!]
}

input FriendUpdateInput {
  user1: UserUpdateOneRequiredWithoutFriendsInput
  user1ID: ID
  user2: UserUpdateOneRequiredInput
  user2ID: ID
}

input FriendUpdateManyDataInput {
  user1ID: ID
  user2ID: ID
}

input FriendUpdateManyMutationInput {
  user1ID: ID
  user2ID: ID
}

input FriendUpdateManyWithoutUser1Input {
  create: [FriendCreateWithoutUser1Input!]
  delete: [FriendWhereUniqueInput!]
  connect: [FriendWhereUniqueInput!]
  set: [FriendWhereUniqueInput!]
  disconnect: [FriendWhereUniqueInput!]
  update: [FriendUpdateWithWhereUniqueWithoutUser1Input!]
  upsert: [FriendUpsertWithWhereUniqueWithoutUser1Input!]
  deleteMany: [FriendScalarWhereInput!]
  updateMany: [FriendUpdateManyWithWhereNestedInput!]
}

input FriendUpdateManyWithWhereNestedInput {
  where: FriendScalarWhereInput!
  data: FriendUpdateManyDataInput!
}

input FriendUpdateWithoutUser1DataInput {
  user1ID: ID
  user2: UserUpdateOneRequiredInput
  user2ID: ID
}

input FriendUpdateWithWhereUniqueWithoutUser1Input {
  where: FriendWhereUniqueInput!
  data: FriendUpdateWithoutUser1DataInput!
}

input FriendUpsertWithWhereUniqueWithoutUser1Input {
  where: FriendWhereUniqueInput!
  update: FriendUpdateWithoutUser1DataInput!
  create: FriendCreateWithoutUser1Input!
}

input FriendWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user1: UserWhereInput
  user1ID: ID
  user1ID_not: ID
  user1ID_in: [ID!]
  user1ID_not_in: [ID!]
  user1ID_lt: ID
  user1ID_lte: ID
  user1ID_gt: ID
  user1ID_gte: ID
  user1ID_contains: ID
  user1ID_not_contains: ID
  user1ID_starts_with: ID
  user1ID_not_starts_with: ID
  user1ID_ends_with: ID
  user1ID_not_ends_with: ID
  user2: UserWhereInput
  user2ID: ID
  user2ID_not: ID
  user2ID_in: [ID!]
  user2ID_not_in: [ID!]
  user2ID_lt: ID
  user2ID_lte: ID
  user2ID_gt: ID
  user2ID_gte: ID
  user2ID_contains: ID
  user2ID_not_contains: ID
  user2ID_starts_with: ID
  user2ID_not_starts_with: ID
  user2ID_ends_with: ID
  user2ID_not_ends_with: ID
  AND: [FriendWhereInput!]
  OR: [FriendWhereInput!]
  NOT: [FriendWhereInput!]
}

input FriendWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  user: User!
  chatRoom: ChatRoom!
  message: String!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  user: UserCreateOneInput!
  chatRoom: ChatRoomCreateOneInput!
  message: String!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
}

type MessagePreviousValues {
  id: ID!
  message: String!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  user: UserUpdateOneRequiredInput
  chatRoom: ChatRoomUpdateOneRequiredInput
  message: String
}

input MessageUpdateManyMutationInput {
  message: String
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  chatRoom: ChatRoomWhereInput
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChatRoom(data: ChatRoomCreateInput!): ChatRoom!
  updateChatRoom(data: ChatRoomUpdateInput!, where: ChatRoomWhereUniqueInput!): ChatRoom
  upsertChatRoom(where: ChatRoomWhereUniqueInput!, create: ChatRoomCreateInput!, update: ChatRoomUpdateInput!): ChatRoom!
  deleteChatRoom(where: ChatRoomWhereUniqueInput!): ChatRoom
  deleteManyChatRooms(where: ChatRoomWhereInput): BatchPayload!
  createClub(data: ClubCreateInput!): Club!
  updateClub(data: ClubUpdateInput!, where: ClubWhereUniqueInput!): Club
  updateManyClubs(data: ClubUpdateManyMutationInput!, where: ClubWhereInput): BatchPayload!
  upsertClub(where: ClubWhereUniqueInput!, create: ClubCreateInput!, update: ClubUpdateInput!): Club!
  deleteClub(where: ClubWhereUniqueInput!): Club
  deleteManyClubs(where: ClubWhereInput): BatchPayload!
  createFriend(data: FriendCreateInput!): Friend!
  updateFriend(data: FriendUpdateInput!, where: FriendWhereUniqueInput!): Friend
  updateManyFriends(data: FriendUpdateManyMutationInput!, where: FriendWhereInput): BatchPayload!
  upsertFriend(where: FriendWhereUniqueInput!, create: FriendCreateInput!, update: FriendUpdateInput!): Friend!
  deleteFriend(where: FriendWhereUniqueInput!): Friend
  deleteManyFriends(where: FriendWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserClub(data: UserClubCreateInput!): UserClub!
  updateUserClub(data: UserClubUpdateInput!, where: UserClubWhereUniqueInput!): UserClub
  updateManyUserClubs(data: UserClubUpdateManyMutationInput!, where: UserClubWhereInput): BatchPayload!
  upsertUserClub(where: UserClubWhereUniqueInput!, create: UserClubCreateInput!, update: UserClubUpdateInput!): UserClub!
  deleteUserClub(where: UserClubWhereUniqueInput!): UserClub
  deleteManyUserClubs(where: UserClubWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  chatRoom(where: ChatRoomWhereUniqueInput!): ChatRoom
  chatRooms(where: ChatRoomWhereInput, orderBy: ChatRoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ChatRoom]!
  chatRoomsConnection(where: ChatRoomWhereInput, orderBy: ChatRoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatRoomConnection!
  club(where: ClubWhereUniqueInput!): Club
  clubs(where: ClubWhereInput, orderBy: ClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Club]!
  clubsConnection(where: ClubWhereInput, orderBy: ClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClubConnection!
  friend(where: FriendWhereUniqueInput!): Friend
  friends(where: FriendWhereInput, orderBy: FriendOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Friend]!
  friendsConnection(where: FriendWhereInput, orderBy: FriendOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FriendConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userClub(where: UserClubWhereUniqueInput!): UserClub
  userClubs(where: UserClubWhereInput, orderBy: UserClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserClub]!
  userClubsConnection(where: UserClubWhereInput, orderBy: UserClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserClubConnection!
  node(id: ID!): Node
}

type Subscription {
  chatRoom(where: ChatRoomSubscriptionWhereInput): ChatRoomSubscriptionPayload
  club(where: ClubSubscriptionWhereInput): ClubSubscriptionPayload
  friend(where: FriendSubscriptionWhereInput): FriendSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userClub(where: UserClubSubscriptionWhereInput): UserClubSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  password: String!
  email: String!
  userClub: UserClub
  friends(where: FriendWhereInput, orderBy: FriendOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Friend!]
  chatRooms(where: ChatRoomWhereInput, orderBy: ChatRoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ChatRoom!]
}

type UserClub {
  id: ID!
  user: User!
  userID: ID!
  club: Club!
  clubID: ID!
}

type UserClubConnection {
  pageInfo: PageInfo!
  edges: [UserClubEdge]!
  aggregate: AggregateUserClub!
}

input UserClubCreateInput {
  user: UserCreateOneWithoutUserClubInput!
  userID: ID!
  club: ClubCreateOneWithoutUserClubInput!
  clubID: ID!
}

input UserClubCreateManyWithoutClubInput {
  create: [UserClubCreateWithoutClubInput!]
  connect: [UserClubWhereUniqueInput!]
}

input UserClubCreateOneWithoutUserInput {
  create: UserClubCreateWithoutUserInput
  connect: UserClubWhereUniqueInput
}

input UserClubCreateWithoutClubInput {
  user: UserCreateOneWithoutUserClubInput!
  userID: ID!
  clubID: ID!
}

input UserClubCreateWithoutUserInput {
  userID: ID!
  club: ClubCreateOneWithoutUserClubInput!
  clubID: ID!
}

type UserClubEdge {
  node: UserClub!
  cursor: String!
}

enum UserClubOrderByInput {
  id_ASC
  id_DESC
  userID_ASC
  userID_DESC
  clubID_ASC
  clubID_DESC
}

type UserClubPreviousValues {
  id: ID!
  userID: ID!
  clubID: ID!
}

input UserClubScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userID: ID
  userID_not: ID
  userID_in: [ID!]
  userID_not_in: [ID!]
  userID_lt: ID
  userID_lte: ID
  userID_gt: ID
  userID_gte: ID
  userID_contains: ID
  userID_not_contains: ID
  userID_starts_with: ID
  userID_not_starts_with: ID
  userID_ends_with: ID
  userID_not_ends_with: ID
  clubID: ID
  clubID_not: ID
  clubID_in: [ID!]
  clubID_not_in: [ID!]
  clubID_lt: ID
  clubID_lte: ID
  clubID_gt: ID
  clubID_gte: ID
  clubID_contains: ID
  clubID_not_contains: ID
  clubID_starts_with: ID
  clubID_not_starts_with: ID
  clubID_ends_with: ID
  clubID_not_ends_with: ID
  AND: [UserClubScalarWhereInput!]
  OR: [UserClubScalarWhereInput!]
  NOT: [UserClubScalarWhereInput!]
}

type UserClubSubscriptionPayload {
  mutation: MutationType!
  node: UserClub
  updatedFields: [String!]
  previousValues: UserClubPreviousValues
}

input UserClubSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserClubWhereInput
  AND: [UserClubSubscriptionWhereInput!]
  OR: [UserClubSubscriptionWhereInput!]
  NOT: [UserClubSubscriptionWhereInput!]
}

input UserClubUpdateInput {
  user: UserUpdateOneRequiredWithoutUserClubInput
  userID: ID
  club: ClubUpdateOneRequiredWithoutUserClubInput
  clubID: ID
}

input UserClubUpdateManyDataInput {
  userID: ID
  clubID: ID
}

input UserClubUpdateManyMutationInput {
  userID: ID
  clubID: ID
}

input UserClubUpdateManyWithoutClubInput {
  create: [UserClubCreateWithoutClubInput!]
  delete: [UserClubWhereUniqueInput!]
  connect: [UserClubWhereUniqueInput!]
  set: [UserClubWhereUniqueInput!]
  disconnect: [UserClubWhereUniqueInput!]
  update: [UserClubUpdateWithWhereUniqueWithoutClubInput!]
  upsert: [UserClubUpsertWithWhereUniqueWithoutClubInput!]
  deleteMany: [UserClubScalarWhereInput!]
  updateMany: [UserClubUpdateManyWithWhereNestedInput!]
}

input UserClubUpdateManyWithWhereNestedInput {
  where: UserClubScalarWhereInput!
  data: UserClubUpdateManyDataInput!
}

input UserClubUpdateOneWithoutUserInput {
  create: UserClubCreateWithoutUserInput
  update: UserClubUpdateWithoutUserDataInput
  upsert: UserClubUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: UserClubWhereUniqueInput
}

input UserClubUpdateWithoutClubDataInput {
  user: UserUpdateOneRequiredWithoutUserClubInput
  userID: ID
  clubID: ID
}

input UserClubUpdateWithoutUserDataInput {
  userID: ID
  club: ClubUpdateOneRequiredWithoutUserClubInput
  clubID: ID
}

input UserClubUpdateWithWhereUniqueWithoutClubInput {
  where: UserClubWhereUniqueInput!
  data: UserClubUpdateWithoutClubDataInput!
}

input UserClubUpsertWithoutUserInput {
  update: UserClubUpdateWithoutUserDataInput!
  create: UserClubCreateWithoutUserInput!
}

input UserClubUpsertWithWhereUniqueWithoutClubInput {
  where: UserClubWhereUniqueInput!
  update: UserClubUpdateWithoutClubDataInput!
  create: UserClubCreateWithoutClubInput!
}

input UserClubWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  userID: ID
  userID_not: ID
  userID_in: [ID!]
  userID_not_in: [ID!]
  userID_lt: ID
  userID_lte: ID
  userID_gt: ID
  userID_gte: ID
  userID_contains: ID
  userID_not_contains: ID
  userID_starts_with: ID
  userID_not_starts_with: ID
  userID_ends_with: ID
  userID_not_ends_with: ID
  club: ClubWhereInput
  clubID: ID
  clubID_not: ID
  clubID_in: [ID!]
  clubID_not_in: [ID!]
  clubID_lt: ID
  clubID_lte: ID
  clubID_gt: ID
  clubID_gte: ID
  clubID_contains: ID
  clubID_not_contains: ID
  clubID_starts_with: ID
  clubID_not_starts_with: ID
  clubID_ends_with: ID
  clubID_not_ends_with: ID
  AND: [UserClubWhereInput!]
  OR: [UserClubWhereInput!]
  NOT: [UserClubWhereInput!]
}

input UserClubWhereUniqueInput {
  id: ID
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  password: String!
  email: String!
  userClub: UserClubCreateOneWithoutUserInput
  friends: FriendCreateManyWithoutUser1Input
  chatRooms: ChatRoomCreateManyWithoutUsersInput
}

input UserCreateManyWithoutChatRoomsInput {
  create: [UserCreateWithoutChatRoomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFriendsInput {
  create: UserCreateWithoutFriendsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserClubInput {
  create: UserCreateWithoutUserClubInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChatRoomsInput {
  username: String!
  password: String!
  email: String!
  userClub: UserClubCreateOneWithoutUserInput
  friends: FriendCreateManyWithoutUser1Input
}

input UserCreateWithoutFriendsInput {
  username: String!
  password: String!
  email: String!
  userClub: UserClubCreateOneWithoutUserInput
  chatRooms: ChatRoomCreateManyWithoutUsersInput
}

input UserCreateWithoutUserClubInput {
  username: String!
  password: String!
  email: String!
  friends: FriendCreateManyWithoutUser1Input
  chatRooms: ChatRoomCreateManyWithoutUsersInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  email: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  username: String
  password: String
  email: String
  userClub: UserClubUpdateOneWithoutUserInput
  friends: FriendUpdateManyWithoutUser1Input
  chatRooms: ChatRoomUpdateManyWithoutUsersInput
}

input UserUpdateInput {
  username: String
  password: String
  email: String
  userClub: UserClubUpdateOneWithoutUserInput
  friends: FriendUpdateManyWithoutUser1Input
  chatRooms: ChatRoomUpdateManyWithoutUsersInput
}

input UserUpdateManyDataInput {
  username: String
  password: String
  email: String
}

input UserUpdateManyMutationInput {
  username: String
  password: String
  email: String
}

input UserUpdateManyWithoutChatRoomsInput {
  create: [UserCreateWithoutChatRoomsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChatRoomsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChatRoomsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutFriendsInput {
  create: UserCreateWithoutFriendsInput
  update: UserUpdateWithoutFriendsDataInput
  upsert: UserUpsertWithoutFriendsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutUserClubInput {
  create: UserCreateWithoutUserClubInput
  update: UserUpdateWithoutUserClubDataInput
  upsert: UserUpsertWithoutUserClubInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChatRoomsDataInput {
  username: String
  password: String
  email: String
  userClub: UserClubUpdateOneWithoutUserInput
  friends: FriendUpdateManyWithoutUser1Input
}

input UserUpdateWithoutFriendsDataInput {
  username: String
  password: String
  email: String
  userClub: UserClubUpdateOneWithoutUserInput
  chatRooms: ChatRoomUpdateManyWithoutUsersInput
}

input UserUpdateWithoutUserClubDataInput {
  username: String
  password: String
  email: String
  friends: FriendUpdateManyWithoutUser1Input
  chatRooms: ChatRoomUpdateManyWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutChatRoomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChatRoomsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutFriendsInput {
  update: UserUpdateWithoutFriendsDataInput!
  create: UserCreateWithoutFriendsInput!
}

input UserUpsertWithoutUserClubInput {
  update: UserUpdateWithoutUserClubDataInput!
  create: UserCreateWithoutUserClubInput!
}

input UserUpsertWithWhereUniqueWithoutChatRoomsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChatRoomsDataInput!
  create: UserCreateWithoutChatRoomsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  userClub: UserClubWhereInput
  friends_every: FriendWhereInput
  friends_some: FriendWhereInput
  friends_none: FriendWhereInput
  chatRooms_every: ChatRoomWhereInput
  chatRooms_some: ChatRoomWhereInput
  chatRooms_none: ChatRoomWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`
      }
    