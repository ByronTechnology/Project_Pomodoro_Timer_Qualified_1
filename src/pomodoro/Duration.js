import React from "react";
import { minutesToDuration } from "../utils/duration";

function Duration({
	session,
	focusDuration,
	breakDuration,
	breakMinus,
	breakPlus,
	focusMinus,
	focusPlus,
}) {
	return (
		<>
			<div className="row">
				<div className="col">
					<div className="input-group input-group-lg mb-2">
						<span className="input-group-text" data-testid="duration-focus">
							{/* TODO: Update this text to display the current focus session duration */}
							Focus Duration: {minutesToDuration(focusDuration)}
						</span>
						<div className="input-group-append">
							{/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
							<button
								type="button"
								className="btn btn-secondary"
								data-testid="decrease-focus"
								onClick={focusMinus}
								disabled={focusDuration === 5 || session?.label}
							>
								<span className="oi oi-minus" />
							</button>
							{/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
							<button
								type="button"
								className="btn btn-secondary"
								data-testid="increase-focus"
								onClick={focusPlus}
								disabled={focusDuration === 60 || session?.label}
							>
								<span className="oi oi-plus" />
							</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="float-right">
						<div className="input-group input-group-lg mb-2">
							<span className="input-group-text" data-testid="duration-break">
								{/* TODO: Update this text to display the current break session duration */}
								Break Duration: {minutesToDuration(breakDuration)}
							</span>
							<div className="input-group-append">
								{/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
								<button
									type="button"
									className="btn btn-secondary"
									data-testid="decrease-break"
									onClick={breakMinus}
									disabled={breakDuration === 1 || session?.label}
								>
									<span className="oi oi-minus" />
								</button>
								{/* TODO: Implement increasing break duration and disable during a focus or break session*/}
								<button
									type="button"
									className="btn btn-secondary"
									data-testid="increase-break"
									onClick={breakPlus}
									disabled={breakDuration === 15 || session?.label}
								>
									<span className="oi oi-plus" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Duration;