import { Index, MinimongoEngine} from 'meteor/easy:search';

Template.search.helpers({
   usersIndex: () => UsersIndex,
})
