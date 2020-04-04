import { EventEntityInterface } from './../contracts/event.entity.interface'
import { Injectable, NotImplementedException } from '@nestjs/common'
import { EntityManager } from 'mikro-orm'

@Injectable()
export class Flusher {
  constructor(private readonly em: EntityManager) {}

  private dispatch(params: []) {
    throw new NotImplementedException(
      'Not emplimented! Move to other service use DI'
    )
  }

  async flush(...roots: EventEntityInterface[]): Promise<void> {
    this.em.flush()

    // after success save we can do other stuff as send email and etc
    roots.forEach((root) => {
      this.dispatch(root.releaseEvents())
    })
  }
}
