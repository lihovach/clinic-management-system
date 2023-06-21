import { Get, JsonController } from "routing-controllers";
import { Repository, getConnectionManager } from "typeorm";
import { EntityFromBody } from "typeorm-routing-controllers-extensions";
import { User } from "../entity";
import { getErrorMessage } from "../utils";

@JsonController("/users")
export class UserController {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getConnectionManager().get().getRepository(User);
  }

  @Get("/")
  get(@EntityFromBody() user: User) {
    return this.userRepository.findOneOrFail({ where: { username: user.username } }).then((user) => {
      // resolve found username
      
    }).catch(() => getErrorMessage("username"));
  }
}
